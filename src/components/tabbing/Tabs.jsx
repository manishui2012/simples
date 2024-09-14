import React, { useState } from 'react'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (id) => {
        setToggleState(id);
    }
    return (
        <>
            <ul className="bloc-tabs">
                <li className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>செய்தி</li>
                <li className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>புகைப்படம்</li>
                <li className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>காணொளி</li>
            </ul>
            <div className="content-tabs">
                <ul className={toggleState === 1 ? "contentss active-content" : "contentss"}>
                    <li><a href="#">
                        <figure><img src="https://images.news18.com/tamil/uploads/2022/12/Leena-Nagwanshi-16723031473x2.jpg" alt="" />
                        </figure>
                        <figcaption>1 ‘அஷ்வின் ஒரு சைன்டிஸ்ட்…’ – வைரலாகும் சேவாக்கின் பதிவு…</figcaption>
                    </a> </li>
                </ul>
                <ul className={toggleState === 2 ? "contentss active-content" : "contentss"}>
                    <li><a href="#">
                        <figure><img src="https://images.news18.com/tamil/uploads/2022/12/Leena-Nagwanshi-16723031473x2.jpg" alt="" />
                        </figure>
                        <figcaption>2 ‘அஷ்வின் ஒரு சைன்டிஸ்ட்…’ – வைரலாகும் சேவாக்கின் பதிவு…</figcaption>
                    </a> </li>
                </ul>
                <ul className={toggleState === 3 ? "contentss active-content" : "contentss"}>
                    <li><a href="#">
                        <figure><img src="https://images.news18.com/tamil/uploads/2022/12/Leena-Nagwanshi-16723031473x2.jpg" alt="" />
                        </figure>
                        <figcaption>3 ‘அஷ்வின் ஒரு சைன்டிஸ்ட்…’ – வைரலாகும் சேவாக்கின் பதிவு…</figcaption>
                    </a> </li>
                </ul>
            </div>
        </>
    )
}

export default Tabs
