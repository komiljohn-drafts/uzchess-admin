import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { loginRequest } from "@/api/auth/loginRequest"
import FormTextField from "@/components/form/form-text-field"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { formatErrorMsgs } from "@/lib/formatErrorMsgs"
import { AuthContext } from "@/providers/auth-provider"
import { LoginFormType, loginSchema } from "@/schemas/loginSchema"
import { IAxiosError } from "@/types/common"

export default function AuthPage() {
  const contextValues = useContext(AuthContext)

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@uzchess.uz",
      password: "qazwsxedc"
    }
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ["ADMIN_SIGNIN"],
    mutationFn: (values: LoginFormType) => loginRequest(values),
    onSuccess: () => {
      toast.success("UzChess platformasiga xush kelibsiz!")
      contextValues?.setIsAuth(true)
    },
    onError: (e: IAxiosError) => {
      toast.error(formatErrorMsgs(e))
    }
  })

  const onSubmit = (values: LoginFormType) => {
    mutate(values)
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <FormProvider {...methods}>
        <Card className="max-w-[550px]">
          <CardHeader>
            <CardTitle className="text-3xl">
              UzChess platformasiga xush kelibsiz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Typography className="mb-2 font-medium">
                Elektron manzil
              </Typography>
              <FormTextField name="email" placeholder="Elektron manzil" />
            </div>
            <div>
              <Typography className="mb-2 font-medium">Parol</Typography>
              <FormTextField name="password" placeholder="Parol" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              isLoading={isPending}
              onClick={methods.handleSubmit(onSubmit)}
              className="w-full"
            >
              Tizimga kirish
            </Button>
          </CardFooter>
        </Card>
      </FormProvider>
    </main>
  )
}
