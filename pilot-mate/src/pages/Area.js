import React from "react";

function createArea(props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Make a Note." name="Title" />
                <p>
                    <textarea name="content" placeholder="Make a note" ></textarea>
                </p>
            </form>
        </div>
    )
}

export default createArea;