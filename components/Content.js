export default function Content({ children }) {
    return (
        <div className="container mx-auto flex justify-center mt-10">
            <div>
                { children }
            </div>
        </div>
    )
}
