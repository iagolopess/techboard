import './theme.style.css';

export function EventTheme( {theme} ){
    return <h3 className='theme-title'>{theme.name}</h3>
}