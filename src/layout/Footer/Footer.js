import React from "react";

import "./Footer.css";
import creditImg from "../../assets/imgs/credits/enamad.png";

const Footer = () => {
	return (
		<footer className="bg-gray-200 " dir="rtl">
			<div className="px-6 py-8 flex flex-col gap-y-4 md:flex-row md:gap-x-6 md:justify-between">
				<nav>
					<h2 className="footer__heading">فیدیبو</h2>
					<ul className="footer__list flex-wrap h-36 md:h-auto md:flex-nowrap">
						<li>
							<a href="#!">درباره ما</a>
						</li>
						<li>
							<a href="#!">تماس با ما</a>
						</li>
						<li>
							<a href="#!">وبلاگ</a>
						</li>
						<li>
							<a href="#!">راهنما</a>
						</li>
						<li>
							<a href="#!">شرایط استفاده</a>
						</li>
						<li>
							<a href="#!">ورود ناشران</a>
						</li>
						<li>
							<a href="#!">همکاری با ما</a>
						</li>
						<li>
							<a href="#!">رصد</a>
						</li>
						<li>
							<a href="#!">RSS کتاب‌ها</a>
						</li>
					</ul>
				</nav>

				<nav>
					<h2 className="footer__heading">کتاب‌های پیشنهادی</h2>
					<ul className="footer__list">
						<li>
							<a href="#!">بهترین سال زندگی تو</a>
						</li>
						<li>
							<a href="#!">کیمیاگر</a>
						</li>
						<li>
							<a href="#!">صبح جادویی</a>
						</li>
						<li>
							<a href="#!">کافکا در کرانه</a>
						</li>
					</ul>
				</nav>

				<nav>
					<h2 className="footer__heading">دسته‌بندی پیشنهادی</h2>
					<ul className="footer__list">
						<li>
							<a href="#!">کتاب های دانشگاهی</a>
						</li>
						<li>
							<a href="#!">کتاب های نوحوان</a>
						</li>
						<li>
							<a href="#!">رمان های جنایی</a>
						</li>
					</ul>
				</nav>

				<div className="flex flex-col gap-y-4 md:w-[45%]">
					<nav>
						<div className="flex justify-between items-center mb-3">
							<h2 className="footer__heading">اپلیکیشن فیدیبو</h2>
							<ul className="text-4xl flex justify-center items-center gap-x-4">
								<li>
									<i className="fab fa-apple text-gray-500"></i>
								</li>
								<li>
									<i className="fa-brands fa-android text-green-500"></i>
								</li>
								<li>
									<i className="fa-brands fa-windows text-blue-500"></i>
								</li>
							</ul>
						</div>
						<button className="bg-cyan-400 rounded-md text-white py-3 px-4 text-sm w-full">
							نصب اپلیکیشن فیدیبو
						</button>
					</nav>

					<nav>
						<form>
							<h2 className="footer__heading">درخواست کتاب</h2>
							<p className="text-sm text-gray-600">
								کتاب مورد نظرتان را درخواست کنید تا در صورت امکان آن را به
								فروشگاه اضافه کنیم.
							</p>
							<div className="flex justify-center mt-3">
								<input
									type="text"
									className="w-4/5 rounded-r-md py-2 px-4"
									placeholder="نام کتاب"
								/>
								<button className="bg-cyan-400 rounded-l-md text-white py-2 px-4 text-sm w-1/5">
									ارسال
								</button>
							</div>
						</form>
					</nav>

					<nav>
						<h2 className="footer__heading">پشتیبانی</h2>
						<div className="flex justify-between items-center mb-4">
							<h4 className="text-sm text-gray-600">
								هفت روز هفته (ساعت 9 الی 18 )
							</h4>
							<p className="font-semibold text-gray-800 text-lg">123-456-789</p>
						</div>
						<ul className="flex justify-around items-center">
							<li className="footer__social-item">
								<a href="#!" className="footer__social-link">
									<i className="fa-brands fa-telegram"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="#!" className="footer__social-link">
									<i className="fa-solid fa-film"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="#!" className="footer__social-link">
									<i className="fa-brands fa-facebook"></i>
								</a>
							</li>
							<li className="footer__social-item">
								<a href="#!" className="footer__social-link">
									<i className="fa-brands fa-twitter-square"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="bg-zinc-400 text-gray-800 text-sm leading-loose mt-10 py-8 px-4">
				<p>
					فیدیبو بزرگترین سامانه خرید کتاب الکترونیک و صوتی در ایران است که
					می‌کوشد با گستره‌ای از کتاب‌ها و مجلات متنوع برای طیف وسیعی از کاربران
					تجربه فوق‌العاده خریدکتاب و خواندن آن در دستگاه‌های هوشمند را فراهم
					کند.در فیدیبو با خرید کتاب از بهترین ناشران ایرانی در موضوعات مختلف،
					کاربران می‌توانند در اپلیکیشن کتابخانه‌ای‌ شخصی برای خود بسازند و از
					امکانات منحصر به فرد آن استفاده کنند. برای تیم فیدیبو هدف خرید کتاب
					نیست بلکه ایجاد محیطی بری ارتباط بیشتر اهالی کتاب است.شایان ذکر است که
					فیدیبو بعد از خرید کتاب، با تیم پشتیبانی همیشه پاسخگوی کاربران محترم
					خواهد بود. با دانلود هزاران کتاب صوتی، دانشگاهی و یا شعر عاشقانه از
					فیدیبو، خواندن کتاب را به گونه ای متفاوت تجربه کنیم.
				</p>

				<div className="flex justify-center items-center gap-x-4 my-5">
					<img src={creditImg} alt="نماد الکترونیکی - فیدیبو" />
					<img src={creditImg} alt="نماد الکترونیکی - فیدیبو" />
				</div>
			</div>

			<p className="bg-zinc-700 p-4 text-center text-gray-200">
				© کلیه حقوق این وب‌سایت متعلق به فیدیبو می‌باشد.
			</p>
		</footer>
	);
};

export default Footer;
