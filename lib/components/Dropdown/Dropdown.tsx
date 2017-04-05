import * as React from 'react';
const iconArrow = '';

/**
 * 
 * 
 * @interface DropdownProps
 */
interface DropdownProps {
    items: Array<any>,
    selected: any | false,
    onChange: (item: any) => void
}

/**
 * 
 * 
 * @interface DropDownState
 */
interface DropDownState {
    isOpen: Boolean
}

/**
 * 
 * 
 * @export
 * @class Dropdown
 * @extends {React.Component<DropdownProps, DropDownState>}
 */
export class Dropdown extends React.Component<DropdownProps, DropDownState> {
    constructor(props, context) {
        super(props, context);
        this.state = { isOpen: false };
    }
    toggle(event) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    select(item) {
        this.props.onChange(item);
    }
    render() {
        const {isOpen} = this.state;
        const {selected, items} = this.props;
        const useTag = href => `<use xlink:href="${href}" />`;
        const divClassName = `dropdown ${isOpen ? 'dropdown_open' : ''}`;
        return <div className={divClassName} onClick={(event) => { this.toggle(event) } }>
            <div className="dropdown__header">
                <span className="dropdown__value">{selected}</span>
                <svg className="icon_inline dropdown__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: useTag(iconArrow) }}
                    >
                </svg>
            </div>
            <div className="dropdown__content">
                <div className="dropdown__content-scrolled">
                    <ul>
                        {
                            items.map((item, index) =>
                                <li key={index}
                                    className="dropdown__content__item"
                                    onClick={() => { this.select(item) } }>
                                    {item}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>;
    }
}