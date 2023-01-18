
import './css/menu.css';
function Menu(){
    return (
        <div>
            <nav>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
                <li id="last-li"><input type="text" placeholder="Search.." /><button><i class="fa fa-search"></i></button></li>
            </ul>
            </nav>
        </div>
    )
}
export default Menu;