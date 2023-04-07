import { useContext } from 'react';
import { Topbar, Navbar, Footer } from '../components';
import { mainContext } from '../context';
import Swal from 'sweetalert2';
const AccountPage = () => {
    const { logout } = useContext(mainContext);
    const handleLogout = () => {
        Swal.fire({
            title: 'آیا مطمئنید که میخواهید از حساب کاربری خود خارج شوید؟',
            text: 'بعدا میتوانید دوباره وارد حساب خود شوید',
            icon: 'warning',
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonColor: '#a0cc00',
            confirmButtonColor: '#d33',
            confirmButtonText: 'بله،خارج می شوم',
            cancelButtonText: 'خیر',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'از حساب خود خارج شدید',
                    'منتظر برگشتتان هستیم :)',
                    'success'
                );
                logout()
            } else if (result.isDismissed) {
                Swal.fire('خوبه که پیشمون داریمت', '', 'success');
            }
        });
    };
    return (
        <>
            <div className='bg-secondaryColor'>
                <Topbar />
                <Navbar />
            </div>
            <div className='bg-primaryColor pt-5'>
                <div className='max-w-[1080px] mx-auto px-12 space-y-3'>
                    <p className='text-topbatLinks py-40' onClick={handleLogout}>
                        خروج از حساب کاربری ؟
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AccountPage;
