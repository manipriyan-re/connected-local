'use client';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { getMenuList, setSubMenu } from '../../../store/slice/authSlice';
import Image from 'next/image';
import SubMenu from '../SubMenu/SubMenu';

const Navbar = () => {
	const submenuRef = useRef(null);
	const buttonRefs = useRef({});
	const path = usePathname();

	const [isSubMenu, setIsSubMenu] = useState(null);

	const { menuList, subMenuList } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	//sample for API calls in RTK
	// const { data: userList, refetch, isLoading, error } = useGetUsersQuery();

	useEffect(() => {
		dispatch(getMenuList());
	}, [dispatch]);

	const showMenu = (menu, e) => {
		e.stopPropagation();
		if (isSubMenu === menu.name) {
			setIsSubMenu(null);
			dispatch(setSubMenu({}));
		} else {
			setIsSubMenu(menu.name);
			dispatch(setSubMenu(menu));
		}
	};

	const setButtonRef = (id) => (el) => {
		buttonRefs.current[id] = el;
	};

	useEffect(() => {
		function handleClickOutside(event) {
			let clickedOutside = true;

			for (const key in buttonRefs.current) {
				const buttonRef = buttonRefs.current[key];
				if (buttonRef && buttonRef.contains(event.target)) {
					clickedOutside = false;
					break;
				}
			}
			if (
				submenuRef.current &&
				!submenuRef.current.contains(event.target) &&
				clickedOutside
			) {
				setIsSubMenu(null);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			{/* {isSubMenu && ( */}
			<div
				className={`absolute submenu-div ${isSubMenu ? 'show' : ''}`}
				style={{ marginLeft: '4.2rem', zIndex: 1 }}
				ref={submenuRef}>
				<SubMenu subMenuList={subMenuList} onClose={() => setIsSubMenu(null)} />
			</div>
			{/* )} */}

			<div
				className="p-3 w-20 tap-nav absolute"
				style={{ height: 'calc(100vh)', zIndex: 1 }}>
				<div
					className={`h-10 flex items-center justify-center`}
					style={{
						height: '3.5rem',
						backgroundColor: 'var(--navbar-bg)',
						borderRadius: `${isSubMenu ? '6px 0px 0 0' : '6px 6px 0 0'}`,
					}}>
					<Image
						src="/images/re-logo.svg"
						width={40}
						height={24}
						alt="RE logo"
					/>
				</div>
				<ul
					className="overflow-auto scroll-nav nav-ul"
					style={{
						height: 'calc(100% - 16rem)',
						backgroundColor: 'var(--navbar-bg)',
					}}>
					{menuList &&
						menuList.map((menu) =>
							menu.isMainMenu ? (
								<li
									className={`h-10 flex justify-center items-center hover:navbar-menu-hov ${path.includes(menu.path) ? 'navbar-menu-hov' : ''}`}
									key={menu.icon}>
									<Link href={menu.path}>
										<Image
											src={`/images/${menu.icon}`}
											className="nav-menu-ttip cursor-pointer"
											data-tooltip-content={menu.name}
											height={0}
											width={0}
											alt={menu.name}
											style={{ height: '24px', width: 'auto' }}
										/>
									</Link>
								</li>
							) : (
								<li
									className={`h-10 flex justify-center items-center hover:navbar-menu-hov ${path.includes(menu.path) ? 'navbar-menu-hov' : ''}`}
									key={menu.icon}>
									<Image
										src={`/images/${menu.icon}`}
										className="nav-menu-ttip cursor-pointer"
										data-tooltip-content={menu.name}
										onClick={(e) => showMenu(menu, e)}
										height={0}
										width={0}
										alt={menu.name}
										style={{ height: '24px', width: 'auto' }}
										ref={setButtonRef(menu.name)}
									/>
								</li>
							),
						)}
				</ul>
				<ul
					className="pt-4 flex items-center flex-col"
					style={{
						height: '11.5rem',
						backgroundColor: 'var(--navbar-bg)',
						borderRadius: `${isSubMenu ? '0 0 0px 6px' : '0 0 6px 6px'}`,
					}}>
					<li className="h-10 flex justify-center items-center mb-4 hover:navbar-menu-hov">
						<Link href="/support">
							<Image
								src={`/images/gold-re.svg`}
								className="nav-menu-ttip cursor-pointer"
								data-tooltip-content="content"
								width={32}
								height={24}
								alt="RE logo Gold"
							/>
						</Link>
					</li>
					<li className="h-10 flex justify-center items-center mb-4 hover:navbar-menu-hov">
						<Image
							src={`/images/notification.svg`}
							className="nav-menu-ttip cursor-pointer"
							data-tooltip-content="content"
							width={32}
							height={24}
							alt="notification"
						/>
					</li>
					<li
						className="size-10 flex justify-center items-center hover:navbar-menu-hov profile-icon relative"
						style={{ background: 'var(--profile-bg)' }}
						// onClick={() => dispatch(logout())}
					>
						<p className="mb-0">Z</p>
						<div
							className="profile-status"
							style={{ background: 'green' }}></div>
					</li>
				</ul>
				<ReactTooltip
					place="right"
					anchorSelect=".nav-menu-ttip"
					className="custom-ttip"
				/>
			</div>
		</>
	);
};

export default Navbar;
