import login from "@/services/login"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const Card = () => (
    <main className="flex flex-grow items-center justify-center"> 
        <form onSubmit={login} className="flex flex-col max-w-lg bg-violet-300 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Faça seu login</h2>
          <label htmlFor="emailInput">Digite seu email:</label>
          <Input id="emailInput" placeholder="Email" type="email" />
          <label htmlFor="passwordInput" className="mt-4">
            Digite sua senha:
          </label>
          <Input id="passwordInput" placeholder="Password" type="password" />
          <Button className="mt-4" type="submit">
            Enviar
          </Button>
        </form>
      </main>
)
export default Card