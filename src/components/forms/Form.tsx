// * Props: FormProps
interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

// * Component: Form
export default function Form({ children, onSubmit, ...props }: IProps) {
  // * Render
  return (
    <form
      className="space-y-6 max-w-3xl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
      {...props}
    >
      {children}
    </form>
  );
}
