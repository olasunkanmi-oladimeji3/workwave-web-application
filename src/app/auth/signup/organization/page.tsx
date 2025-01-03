"use client";
import  Image  from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";


const signUpSchema = z.object({
  firstName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  industry: z.string({
    message: "Please enter a valid email address.",
  }),
  website: z.string({
    message: "Please enter a valid email address.",
  }),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export default function CreateOrganizationPage() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      industry: "",
    },
  });

  function onSubmit(data: SignUpValues) {
    setIsAuthenticating(true);
    // Here you would typically send the data to your backend API
    console.log(data.industry);
    toast({
      title: "Account created successfully",
      description: "You can now sign in with your new account.",
    });
    router.push("/auth/signup/organization");
  }

  return (
    <div className="container mx-auto w-4/5 lg:flex lg:items-center lg:justify-between">
      {/* Form Section */}
      <div className="lg:w-1/2 space-y-2 my-16 pt-5">
        <h1 className="text-3xl  font-bold text-center">
          Register Your Organization
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Enter your organization&apos;s details below to get started.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 lg:px-11 md:px-3 space-y-4 mx-auto"
          >
            <div className="space-y-2">
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your organization name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem className="w-full">
                  <FormLabel>Organization Logo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/png, image/jpeg, image/svg+xml"
                      className="block w-full"
                    />
                  </FormControl>
                  <p className="mt-1 text-xs text-muted-foreground">
                    PNG, JPG, or SVG, max 5MB
                  </p>
                </FormItem>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="admin@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
            </div>

            <Button
              type="submit"
              className={`w-full ${isAuthenticating ? "opacity-50" : ""}`}
              disabled={isAuthenticating}
            >
              {isAuthenticating ? "Creating Account..." : "Create Organization"}
            </Button>
          </form>
        </Form>
      </div>

      {/* Image Section */}
      <div className="mt-12 lg:mt-0 lg:w-1/2">
        <Image
          src="/org-signup.png"
          alt="Register Organization"
          width={500}
          height={100}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
