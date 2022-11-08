export default function InputError({ message, className = '' }) {
    return message ? <p className={'text-xs text-red-600 ' + className}>{message}</p> : null;
}
