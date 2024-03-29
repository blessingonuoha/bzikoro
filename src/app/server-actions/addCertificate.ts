"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function addCertificate(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.from("certificate").insert([
    {
      // eventId: Math.random().toString(16).slice(2),
      certificateName: formData.get("certificateName"),
      certificateHeading: formData.get("certificateHeading"),
      TrainingDuration: formData.get("trainingDuration"),
      cpdRequired: formData.get("cpdRequired"),
      cpdPoints: formData.get("cpdPoints"),
      logoPosition: formData.get("logoPosition"),
      attendanceRate: formData.get("attendanceRate"),
      trainingScope: [formData.get("trainingScope")],
      // zikoroLogo: formData.get("zikoroLogo"),
      // certficateTemplate: formData.get("certficateTemplate"),
      attendance: [
        {
          attendanceName: formData.get("attendance"),
          attendanceType: formData.get("attendanceType"),
        },
      ],

      criteria: formData.get("criteria"),
      // organisationLogo: formData.get("organisationLogo"),
    },
  ]);
  if (error) {
    console.log(error);
  }
  // revalidatePath("/getCertificate");
  console.log("certificate added", data);

  return { message: "Success", data };
}

// CREATE TABLE IF NOT EXISTS public.certificate
// (
//     id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
//     created_at timestamp with time zone NOT NULL DEFAULT now(),
//     "eventId" text COLLATE pg_catalog."default",
//     "certificateName" text COLLATE pg_catalog."default",
//     "certificateHeading" text COLLATE pg_catalog."default",
//     "TrainingDuration" numeric,
//     "cpdRequired" boolean,
//     "logoPosition" text COLLATE pg_catalog."default",
//     "trainingScope" json,
//     "zikoroLogo" boolean,
//     "certficateTemplate" text COLLATE pg_catalog."default",
//     attendance json,
//     "attendanceRate" numeric,
//     criteria json,
//     "organisationLogo" text COLLATE pg_catalog."default",
//     CONSTRAINT certificate_pkey PRIMARY KEY (id)
// )

// TABLESPACE pg_default;

// ALTER TABLE public.certificate
//     OWNER to postgres;
