import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        React Form Handling Demo
      </h1>

      <div className="w-full max-w-md mb-12 p-6 bg-white rounded shadow">
        <RegistrationForm />
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
