import login from "@/services/login"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { api } from "@/api"

interface IUser{
  email: string,
  senha: string,
  name: string,
  saldo: number
}
const Card = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState<null|IUser>()

  useEffect(() => {
    const getData = async () => {
      const data: any | IUser = await api
      setUser(data)
    }

    getData()
  },[])
  console.log(user)

    return(
      <main className="flex flex-grow items-center justify-center"> 
        <form onSubmit={()=>login(email, senha)} className="flex flex-col max-w-lg bg-violet-300 p-4 rounded-xl">
          {!user && <p>Loading...</p>}
          <h2 className="text-2xl font-bold mb-4">Faça seu login <strong>{user?.name}</strong></h2>
          <label htmlFor="emailInput">Digite seu email:</label>
          <Input id="emailInput" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="passwordInput" className="mt-4">
            Digite sua senha:
          </label>
          <Input id="passwordInput" placeholder="Password" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} />
          <Button className="mt-4" type="submit">
            Enviar
          </Button>
        </form>
      </main>
    )
}
export default Card