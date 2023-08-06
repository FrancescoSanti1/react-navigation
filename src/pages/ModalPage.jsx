import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const modal = <Modal
        onClose={handleClose}
        actions={<Button onClick={handleClose} variation={"primary"}>Confirm</Button>}
    >
        <p>Content of the modal. This is a placeholder text.</p>
    </Modal>;

    return <div>
        <Button variation={"primary"} onClick={handleClick}>Open modal</Button>
        {showModal && modal}
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero dignissimos unde odit deleniti illo ad quod corrupti veniam ut. Animi, nihil incidunt. Beatae dolore saepe alias aspernatur eveniet quam.
                Commodi consectetur eius dolores beatae totam quae ad asperiores veritatis nobis alias, voluptate, repellat neque quam deleniti, ipsam nostrum illo natus aut. Labore dicta perferendis ipsum odio distinctio quas iste.
                Ut qui dolorem expedita blanditiis sed ipsam recusandae tempore, possimus nostrum? Labore numquam sed suscipit minus nemo atque earum ab neque non sapiente tempore ducimus inventore dolore, perspiciatis veritatis rerum?
                Eos nemo quam rem quidem omnis alias qui quis vel nam nostrum, veniam praesentium ullam! Nulla velit molestiae voluptatibus, obcaecati iure illo aliquam, officia sequi, repudiandae nemo voluptas repellat quibusdam.
                Amet doloribus voluptas eum. Distinctio accusamus natus cumque voluptas adipisci odit temporibus nostrum aliquam minima provident quis aut, dolore est esse. Assumenda alias porro beatae fuga, dignissimos inventore laborum iure.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero dignissimos unde odit deleniti illo ad quod corrupti veniam ut. Animi, nihil incidunt. Beatae dolore saepe alias aspernatur eveniet quam.
                Commodi consectetur eius dolores beatae totam quae ad asperiores veritatis nobis alias, voluptate, repellat neque quam deleniti, ipsam nostrum illo natus aut. Labore dicta perferendis ipsum odio distinctio quas iste.
                Ut qui dolorem expedita blanditiis sed ipsam recusandae tempore, possimus nostrum? Labore numquam sed suscipit minus nemo atque earum ab neque non sapiente tempore ducimus inventore dolore, perspiciatis veritatis rerum?
                Eos nemo quam rem quidem omnis alias qui quis vel nam nostrum, veniam praesentium ullam! Nulla velit molestiae voluptatibus, obcaecati iure illo aliquam, officia sequi, repudiandae nemo voluptas repellat quibusdam.
                Amet doloribus voluptas eum. Distinctio accusamus natus cumque voluptas adipisci odit temporibus nostrum aliquam minima provident quis aut, dolore est esse. Assumenda alias porro beatae fuga, dignissimos inventore laborum iure.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero dignissimos unde odit deleniti illo ad quod corrupti veniam ut. Animi, nihil incidunt. Beatae dolore saepe alias aspernatur eveniet quam.
                Commodi consectetur eius dolores beatae totam quae ad asperiores veritatis nobis alias, voluptate, repellat neque quam deleniti, ipsam nostrum illo natus aut. Labore dicta perferendis ipsum odio distinctio quas iste.
                Ut qui dolorem expedita blanditiis sed ipsam recusandae tempore, possimus nostrum? Labore numquam sed suscipit minus nemo atque earum ab neque non sapiente tempore ducimus inventore dolore, perspiciatis veritatis rerum?
                Eos nemo quam rem quidem omnis alias qui quis vel nam nostrum, veniam praesentium ullam! Nulla velit molestiae voluptatibus, obcaecati iure illo aliquam, officia sequi, repudiandae nemo voluptas repellat quibusdam.
                Amet doloribus voluptas eum. Distinctio accusamus natus cumque voluptas adipisci odit temporibus nostrum aliquam minima provident quis aut, dolore est esse. Assumenda alias porro beatae fuga, dignissimos inventore laborum iure.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero dignissimos unde odit deleniti illo ad quod corrupti veniam ut. Animi, nihil incidunt. Beatae dolore saepe alias aspernatur eveniet quam.
                Commodi consectetur eius dolores beatae totam quae ad asperiores veritatis nobis alias, voluptate, repellat neque quam deleniti, ipsam nostrum illo natus aut. Labore dicta perferendis ipsum odio distinctio quas iste.
                Ut qui dolorem expedita blanditiis sed ipsam recusandae tempore, possimus nostrum? Labore numquam sed suscipit minus nemo atque earum ab neque non sapiente tempore ducimus inventore dolore, perspiciatis veritatis rerum?
                Eos nemo quam rem quidem omnis alias qui quis vel nam nostrum, veniam praesentium ullam! Nulla velit molestiae voluptatibus, obcaecati iure illo aliquam, officia sequi, repudiandae nemo voluptas repellat quibusdam.
                Amet doloribus voluptas eum. Distinctio accusamus natus cumque voluptas adipisci odit temporibus nostrum aliquam minima provident quis aut, dolore est esse. Assumenda alias porro beatae fuga, dignissimos inventore laborum iure.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vero dignissimos unde odit deleniti illo ad quod corrupti veniam ut. Animi, nihil incidunt. Beatae dolore saepe alias aspernatur eveniet quam.
                Commodi consectetur eius dolores beatae totam quae ad asperiores veritatis nobis alias, voluptate, repellat neque quam deleniti, ipsam nostrum illo natus aut. Labore dicta perferendis ipsum odio distinctio quas iste.
                Ut qui dolorem expedita blanditiis sed ipsam recusandae tempore, possimus nostrum? Labore numquam sed suscipit minus nemo atque earum ab neque non sapiente tempore ducimus inventore dolore, perspiciatis veritatis rerum?
                Eos nemo quam rem quidem omnis alias qui quis vel nam nostrum, veniam praesentium ullam! Nulla velit molestiae voluptatibus, obcaecati iure illo aliquam, officia sequi, repudiandae nemo voluptas repellat quibusdam.
                Amet doloribus voluptas eum. Distinctio accusamus natus cumque voluptas adipisci odit temporibus nostrum aliquam minima provident quis aut, dolore est esse. Assumenda alias porro beatae fuga, dignissimos inventore laborum iure.</p>
        </div>
    </div>
}