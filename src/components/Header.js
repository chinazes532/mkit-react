const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
            <img src="https://i.ibb.co/r2HZXnkh/Group-7.png" alt="Group 7" border="0"/>
            </div>

            <nav className="main-nav">
                <ul>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Расписание</a></li>
                    <li><a href="#">Домашнее задание</a></li>
                    <li><a href="#">Ведомость</a></li>
                    <li><a href="#">Личный кабинет</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;