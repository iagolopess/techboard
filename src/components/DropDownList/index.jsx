import './dropdown-list.style.css'

export function DropdownList({ items, ...rest }) {

    return (
        <select {...rest} className='dropdown-list' defaultValue="">
            <option value="" disabled>
                Selecione uma opção
            </option>
            {items.map(function (item) {
                return <option key={item.id} value={item.id}>
                    {item.name}
                </option>

            })}

        </select>
    )

}