import img from "../../../public/img/logo.svg"
const Nav = ()=>{

    return (
        <div className="flex w-full gap-48">
            <div className="flex justify-between w-full">
            <div>
        <img src={img} alt="ERROR:404" />
            </div>

        <ul className="text-[#212529] text-lg leading-5 flex flex-col gap-2">
            <li>О нас</li>
            <li>Проекты</li>
            <li>Материалы</li>
            <li>Отзывы</li>
        </ul>
            </div>

        <div className="">
            <p>+994556680619
            </p>
        </div>
        </div>
    )
}

export default Nav;