import Photo from './Photo';
import Person from './Person';
import Skills from './Skills';
import Languages from './Languages';



function Sidebar() {
    return (
        <div className="flex flex-col">
            <Photo />
            <Person />
            <Skills />
            <Languages />
        </div>
    );
}
export default Sidebar;