import LoginButton from "@components/LoginButton";

export default function Header({ title }) {

  return (
      <header className="flex justify-between p-4 shadow-xl rounded mb-2 bg-gray-100 items-center">
              <div>
                  {title}
              </div>
              <div>
                  <LoginButton />
              </div>
      </header>
  )
}
