import { z } from "zod";
import {
  MAX_LENGTH_OF_COLLECTION_DESCRIPTION,
  MAX_LENGTH_OF_COLLECTION_NAME,
} from "./utility";

export const updateCollectionSchema = z.object({
  collectionName: z.string().min(1).max(MAX_LENGTH_OF_COLLECTION_NAME),
  collectionNewName: z.string().min(1).max(MAX_LENGTH_OF_COLLECTION_NAME),
  collectionNewDescription: z
    .string()
    .min(1)
    .max(MAX_LENGTH_OF_COLLECTION_DESCRIPTION)
    .optional(),
});
