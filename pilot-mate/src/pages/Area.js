import React from "react";

function CreateArea(props) {
    return (
        <div className="background">
            <form>
                <input type="text" placeholder="Make a Note." name="Title" />
                <p>
                    <textarea name="content" placeholder="Make a note" ></textarea>
                </p>
            </form>
        </div>
    )
}

export default CreateArea;