import FormProtergo from '../components/FormProtergo';

export default function LoginPage() {
  return (
    <>
      <div className="h-screen justify-between lg:mx-[30%]">
        <FormProtergo textButton="Login" headerForm="Protergo" />
      </div>
    </>
  );
}
