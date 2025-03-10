'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeToast } from '../store/slice/toastSlice';
import Navbar from '@/components/shared/Navbar/Navbar';
import AlertToast from '@/components/shared/Toasts/AlertToast';
import Login from '@/components/views/Login/Login';
import i18n from '@/i18n';
import { GoogleMapsProvider } from '@/utilities/GoogleMapsProvider';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en');
	function handleLanguageChange(selectedLang) {
		if (selectedLang?.value) {
			i18n.changeLanguage(selectedLang.value);
			setLanguage(selectedLang.value);
			localStorage.setItem('language', selectedLang.value);

      setTimeout(()=>{
        window.location.reload();
      },100);
		}
	}

	// Ensure the selected language is applied on mount
	useEffect(() => {
		const savedLang = localStorage.getItem('language') || 'en';
		if (i18n.language !== savedLang) {
			i18n.changeLanguage(savedLang);
			setLanguage(savedLang);
		}
	}, []);
	return (
		<LanguageContext.Provider value={{ language, handleLanguageChange }}>
			{children}
		</LanguageContext.Provider>
	);
};
export const useLanguage = () => useContext(LanguageContext);

const ClientLayout = ({ children }) => {
	const { toast } = useSelector((state) => state.toasts);
	const dispatch = useDispatch();	
	const { isLoggedIn } = useSelector((state) => state.auth);


	useEffect(() => {
        let timer = null;
        if (toast.isToast) {
            timer = setTimeout(() => {
                dispatch(closeToast());
            }, 4000);
        }
        return () => clearTimeout(timer); // Clear timeout if unmounted
    }, [toast.isToast, dispatch]);

	return (
		<LanguageProvider>
			{!isLoggedIn ? (
				// !true
				<Login />
			) : (
				<GoogleMapsProvider>
					{toast.isToast && (
						<AlertToast alertType={toast.type} alertMessage={toast.message} />
					)}

					<Navbar />
					{children}
				</GoogleMapsProvider>
			)}
		</LanguageProvider>
	);
};

export default ClientLayout;
