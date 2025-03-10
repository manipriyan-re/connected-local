'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SubMenu = ({ subMenuList = {}, onClose }) => {
	const [filteredMenu, setFilteredMenu] = useState([]);

	useEffect(() => {
		if (subMenuList.subMenu) {
			setFilteredMenu(subMenuList.subMenu);
		}
	}, [subMenuList]);

	const handleSearch = (q) => {
		if (q.target.value) {
			const query = q.target.value.toLowerCase();
			const all = [...filteredMenu];
			let temp = [];
			temp = all.filter((data) => data.name.toLowerCase().indexOf(query) > -1);
			setFilteredMenu(temp);
		} else {
			setFilteredMenu(subMenuList.subMenu);
		}
	};

	return (
		<div className="submenu-outer rounded-r-lg mt-3">
			<form className="search-box flex justify-center items-center">
				<Image
					src="/images/search.svg"
					className="mr-2"
					width={16}
					height={16}
					alt="Search"
				/>
				<input
					className="mr-2"
					type="search"
					placeholder="Search"
					onChange={handleSearch}
				/>
				<Image
					src="/images/search-short-cut.svg"
					width={32}
					height={32}
					alt="search"
				/>
			</form>
			<section role="subMenus" className="mt-8">
				<h3 className="text-xs uppercase" style={{ color: '#868686' }}>
					{subMenuList.name}
				</h3>
				<ul className="mt-4">
					{subMenuList.subMenu &&
						filteredMenu.map((menu) => (
							<li key={menu.name} className="py-2 mb-4">
								<Link
									className="flex items-center"
									href={menu.path}
									onClick={onClose}>
									<Image
										src={`/images/${menu.icon}`}
										height={20}
										width={20}
										alt={menu.name}
										className="mr-4"
									/>
									<p>{menu.name}</p>
								</Link>
							</li>
						))}
				</ul>
			</section>
		</div>
	);
};

export default SubMenu;
