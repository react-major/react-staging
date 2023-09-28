"use server";
import prisma from "lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const newFeatureData = z.object({
  title: z.string(),
  content: z.string(),
});

async function createItem(formData: FormData) {
  const created = await prisma.feature.create({
    data: newFeatureData.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    }),
  });
}

export async function createFeature(_: any, formData: FormData) {
  try {
    await createItem(formData);
    return revalidatePath("/");
  } catch (e) {
    return { message: "Failed to create" };
  }
}
