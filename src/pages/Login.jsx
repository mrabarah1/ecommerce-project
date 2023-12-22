import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="h-screen grid place-items-center">
        <Form
          className="card w-96 p-8 bg-base-100 shadow-2xl flex flex-col gap-y-4"
        >
          <h4 className="text-center text-3xl font-bold">Login</h4>
          <FormInput
            type="email"
            label="email"
            name="identifier"
            defaultValue="text@test.com"
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            defaultValue="secret"
          />
          <div className="mt-4">
            <SubmitBtn text="login" />
          </div>
          <button type="button" className="btn btn-secondary btn-block">
            guest user
          </button>
          <p className="text-center">
            Not a member yet?
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >Register</Link>
          </p>
        </Form>
      </section>
    </>
  );
}

export default Login




{
  /* <main className="m-auto h-screen max-w-7xl px-12 pt-20 pb-10 transition-all sm:px-8 md:px-10 lg:px-12">
        <div>
          <h1 className="mb-6 text-3xl capitalize text-white md:text-4xl">
            subscription details
          </h1>
          <h2 className="text-lg font-semibold uppercase text-[#555]">
            your membership
          </h2>
          <div className="border bg-white p-10">
            <h2 className="text-xl font-semibold capitalize">plan</h2>
            <p className="text-xl capitalize">premium</p>
            <span>₦10,000/month</span>
            <h3 className="mt-8 font-semibold capitalize">Next billing date</h3>
            <span className="capitalize">november 7, 2023</span>
          </div>
          <h3 className="text-[#d0cccc]">
            Membership fees are billed at the beginning of each period and may
            take a few days after the billing date to appear on your account.
          </h3>
        </div>

        <div className="mt-8 text-[#d0cccc]">
          <h2 className="mb-4 text-xl font-semibold underline">Plan Details</h2>
          <div className="">
            <div className="w-full overflow-x-auto md:w-auto">
              <table className="   min-w-full">
                <thead>
                  <tr>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">
                      Date
                    </th>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">Description</th>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">Service period</th>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">Payment method</th>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">Subtotal</th>
                    <th className="border-b border-gray-300 py-3 px-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-300 py-3 px-4">07/10/2023</td>
                    <td className="border-b border-gray-300 py-3 px-4">Streaming Service</td>
                    <td className="border-b border-gray-300 py-3 px-4">07/10/2023—06/11/2023</td>
                    <td className="border-b border-gray-300 py-3 px-4">VISA •••• •••• •••• 8749</td>
                    <td className="border-b border-gray-300 py-3 px-4">₦3,348.84 (+₦251.16 VAT)</td>
                    <td className="border-b border-gray-300 py-3 px-4">₦3,600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main> */
}