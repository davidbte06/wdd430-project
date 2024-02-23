"use server";

import prisma from "./prismadb";
import { z } from "zod";
import { redirect } from "next/navigation";
import { signIn } from "../../auth";
import { AuthError } from "next-auth";
const bcrypt = require("bcrypt");

//State User
export type StateUser = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const FormSchemaAccount = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

const RegisterUser = FormSchemaAccount.omit({ id: true });

export async function registerUser(prevState: StateUser, formData: FormData) {
  const validatedFields = RegisterUser.safeParse({
    firstName: formData.get("firstName"),
    middleName: formData.get("middleName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  const { firstName, lastName, middleName, email, password } =
    validatedFields.data;
  const role = "user";
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.userGame.create({
      data: {
        firstName: firstName,
        middleName: middleName ?? null,
        lastName: lastName,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  redirect("/auth/login");
}
