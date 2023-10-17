interface InputProps {
    text: string;
}


export default function Input({ text }: InputProps) {
    return (
        <label>
            {text}
            <input type="text" />
        </label>
    )
}