import Header from "@components/Header";

export default function Content({ children }) {
    return (
        <>
            <Header />
            <div className="container mx-auto flex justify-center mt-10">
                <div>
                    { children }
                </div>
            </div>
        </>
    )
}
