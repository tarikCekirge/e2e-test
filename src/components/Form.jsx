import { useFormik } from 'formik';
import LoginFormSchema from '../schemas/LoginFormSchema';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const { values, errors, handleChange, handleReset, handleSubmit, handleBlur, dirty, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',
            term: false
        },
        validateOnChange: false,
        validateOnBlur: true,
        validationSchema: LoginFormSchema,
        onSubmit: () => {

            navigate('/success', { state: { isAuthenticated: true } });
        },
    });

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-sm px-6 py-8 bg-slate-200 shadow-lg rounded-lg'>
            <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='username'>
                    Username
                </label>
                <input
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username && touched.username ? 'border-red-500' : ''}`}
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                    <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='password'>
                    Password
                </label>
                <input
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && touched.password ? 'border-red-500' : ''}`}
                    id='password'
                    name='password'
                    type='password'
                    placeholder='**********'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
            </div>

            <div className='mb-4'>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                        id='term'
                        name='term'
                        type="checkbox"
                        checked={values.term}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Sözleşmeyi kabul ediyorum.</span>
                </label>
                {errors.term && touched.term && (
                    <p className="text-red-500 text-xs mt-1">{errors.term}</p>
                )}
            </div>

            <div className='flex items-center justify-end gap-3'>
                <button type="reset" onClick={handleReset} className='text-slate-800 font-semibold cursor-pointer'>
                    Clear
                </button>
                <button type='submit' className='bg-slate-700 text-white font-semibold px-8 py-3 rounded-md cursor-pointer' disabled={!dirty}>
                    Login
                </button>
            </div>
        </form>
    );
};

export default Form;
