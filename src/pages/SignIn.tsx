import { Checkbox } from "@radix-ui/react-checkbox"
import { Envelope, Lock } from "phosphor-react"
import axios from "axios"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { TextInput } from "../components/TextInput"
import { Text } from "../components/Text"
import { Logo } from "../Logo"
import { FormEvent, useState } from "react"

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'contato@filipeperes.com',
            password: '12345678',	
        })

        setIsUserSignedIn(true);
    }
    return(
        <div className='w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100'>
        <header className="flex flex-col items-center">
          <Logo />

          <Heading size="lg" className="mt-4">
            Dream Design System
          </Heading>

          <Text size="lg" className="text-grey-400 mt-1">Faça Login e comece a usar</Text>
        </header>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
            { isUserSignedIn && <Text>Login Realizado!</Text>}

          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" id="password" placeholder="******" />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-8">
            <Checkbox id="remember" />
            <Text size="sm">Lembrar de mim por 30 dias</Text>
          </label>
          <Button type="submit">Entrar na plataforma</Button>
        </form>
        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="#" className="text-grey-400 underline hover:text-grey-200">Esqueceu sua senha?</a>
          </Text>
          <Text asChild size="sm">
            <a href="#" className="text-grey-400 underline hover:text-grey-200">Criar minha conta agora</a>
          </Text>
        </footer>
      </div>
    )
}