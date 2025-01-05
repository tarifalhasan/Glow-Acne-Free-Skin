import { navigation_menus } from "@/data";

const Footer = () => {
  return (
    <footer className="bg-[#DEFBFF]">
      <div className="container pt-[70px] pb-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <h4 className="text-2xl lg:text-3xl font-bold font-familjen">
            Glow Acne-free skin
          </h4>
          <div className="flex flex-wrap gap-8">
            {navigation_menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-familjen text-skin-gray-black hover:text-[#0891B2] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <ul className="flex justify-center gap-3">
            <li>
              <a
                href="http://"
                className="w-12 rounded-full group h-12 hover:bg-[#87DBE6]  transition-all duration-300 grid place-items-center bg-white/[0.46]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    d="M10.7124 8.59151L17.4133 0.802246H15.8254L10.0071 7.56555L5.35992 0.802246H0L7.02738 11.0296L0 19.1978H1.58799L7.73237 12.0555L12.6401 19.1978H18L10.7121 8.59151H10.7124ZM8.53747 11.1197L7.82546 10.1013L2.16017 1.99766H4.59922L9.17118 8.53752L9.8832 9.55593L15.8262 18.0567H13.3871L8.53747 11.1201V11.1197Z"
                    className="group-hover:fill-white fill-black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://"
                className="w-12 rounded-full group h-12 hover:bg-[#87DBE6]  transition-all duration-300 grid place-items-center bg-white/[0.46]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                >
                  <path
                    d="M0.963066 8.87389L5.79339 10.5144L17.2611 3.50355C17.4274 3.40188 17.5977 3.62765 17.4543 3.75962L8.77238 11.7509L8.44952 16.2248C8.42494 16.5652 8.83491 16.7547 9.07822 16.5154L11.7514 13.8868L16.6381 17.5861C17.1649 17.9849 17.9276 17.7039 18.0697 17.0587L21.4724 1.60868C21.6665 0.727302 20.8029 -0.0164281 19.96 0.306342L0.938488 7.59018C0.341788 7.8187 0.358041 8.66844 0.963066 8.87389Z"
                    className="group-hover:fill-white fill-black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://"
                className="w-12 rounded-full group h-12 hover:bg-[#87DBE6]  transition-all duration-300 grid place-items-center bg-white/[0.46]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.9953 17.9999L17.9998 17.9992V11.3977C17.9998 8.16817 17.3044 5.68042 13.5285 5.68042C11.7133 5.68042 10.4952 6.67642 9.99788 7.62067H9.94538V5.98192H6.36523V17.9992H10.0931V12.0487C10.0931 10.4819 10.3902 8.96692 12.3306 8.96692C14.2426 8.96692 14.2711 10.7549 14.2711 12.1492V17.9999H17.9953Z"
                    className="group-hover:fill-white fill-black"
                  />
                  <path
                    d="M0.294922 5.98291H4.02733V18.0001H0.294922V5.98291Z"
                    className="group-hover:fill-white fill-black"
                  />
                  <path
                    d="M2.16174 0C0.968357 0 0 0.968249 0 2.1615C0 3.35475 0.968357 4.34325 2.16174 4.34325C3.35512 4.34325 4.32348 3.35475 4.32348 2.1615C4.32273 0.968249 3.35437 0 2.16174 0Z"
                    className="group-hover:fill-white fill-black"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="flex pt-8 mt-9 w-full flex-wrap gap-5 justify-between items-center  border-t border-[#86C8D0]">
            <p
              style={{
                fontFamily: '"Comic Neue", serif',
              }}
              className="text-sm lg:text-base font-normal"
            >
              Copyright @ 2024 Website. All rights reserved.
            </p>
            <div className="inline-flex items-center gap-2">
              <a
                href="/"
                style={{
                  fontFamily: '"Comic Neue", serif',
                }}
                className="text-sm lg:text-base font-normal"
              >
                Terms & Conditions |
              </a>
              <a
                href="/"
                style={{
                  fontFamily: '"Comic Neue", serif',
                }}
                className="text-sm lg:text-base font-normal"
              >
                Privacy Policy.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
