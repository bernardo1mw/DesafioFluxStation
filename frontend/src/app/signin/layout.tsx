
interface Props {
  children: React.ReactNode;
}

export default function SigninLayout(props: Props) {
  return (
			
    <div >
        {props.children}
    </div>
  );
}
