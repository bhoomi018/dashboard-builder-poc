import { z } from "zod";

export const BarSchema = z.array(
  z.object({
    label: z.string(),
    value: z.number()
  })
);

export const LineSchema = z.array(
  z.object({
    date: z.string(),
    value: z.number()
  })
);

export const ScatterSchema = z.array(
  z.object({
    x: z.number(),
    y: z.number()
  })
);

export const TreeSchema = z.object({
  name: z.string(),
  children: z.array(z.any()).optional()
});
