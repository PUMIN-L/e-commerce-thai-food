import { useRef, useState } from "react"
import Input from "../../../components/Input"
import Avatar from "../../althentication/components/Avatar"
import blankImage from "../../../../src/assets/blankImage.png"
import Button from "../../../components/Button"
import { toast } from "react-toastify"
import useProduct from "../hook/useProduct"
import varidateCreateProductSchema from "../../althentication/varidator/validator-createProduct"
import Spinner from "../../../components/Spinner"
import { useNavigate } from "react-router-dom";

const initialInput = {
    name: '',
    price: null,
    categoryName: '',
    description: '',
}

const initialInputError = {
    name: '',
    price: '',
    categoryName: '',
    description: '',
}

export default function AddMenuForm({ onSuccess }) {

    const fileEl = useRef()
    const navigate = useNavigate()
    const { createProduct } = useProduct()

    const [input, setInput] = useState(initialInput)
    const [inputError, setInputError] = useState(initialInputError)
    const [file, setFile] = useState(null)
    const [loaging, setLoading] = useState(false)

    const handleChangeInput = e => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClickCreateProduct = async e => {
        try {
            e.preventDefault()
            setLoading(true)
            const error = varidateCreateProductSchema(input)

            if (error) {
                console.log(error)
                setInputError(error)
                return
            }

            setInputError({ ...initialInputError })

            const formData = new FormData()
            if (file) {
                formData.append('imageUrl', file)
            }

            for (const key in input) {
                formData.append(key, input[key])
            }

            await createProduct(formData)

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            navigate('/menu')
            onSuccess()
            setLoading(false)
            toast.success("Created new menu")
        }
    }


    const classNameP = "w-50 m-auto font-bold text-blue-800"
    return (<div>
        {loaging && <Spinner transparent={true} />}
        <div className="pt-5">
            <div className="flex flex-col">
                <div className="flex mb-5">
                    <p className={classNameP}>Food Name :</p>
                    <Input
                        placeholder="Input Food name"
                        value={input.name}
                        name="name"
                        onChange={handleChangeInput}
                        error={inputError.name}
                    />
                </div>

                <div className="flex mb-5 ">
                    <p className={classNameP}>Food Price :</p>
                    <Input
                        placeholder="Input Food Price"
                        value={input.price}
                        name="price"
                        onChange={handleChangeInput}
                        error={inputError.price}
                    />
                </div>

                <div className="flex mb-5 ">
                    <p className={`${classNameP}`}>category name :</p>
                    <Input
                        placeholder="Input category name"
                        value={input.categoryName}
                        name="categoryName"
                        onChange={handleChangeInput}
                        error={inputError.categoryName}
                    />
                </div>

                <div className="flex mb-5 flex-col gap-2 items-center">
                    <p className={`${classNameP}  text-center`}>Food Picture</p>

                    <input type="file" ref={fileEl}
                        className="hidden"
                        onChange={e => {
                            if (e.target.files[0]) {
                                setFile(e.target.files[0])
                            }
                        }}
                    />

                    <div className=" w-full ">
                        <div class="max-w-sm mx-auto">
                            <div class=" rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                <Avatar
                                    src={file ? URL.createObjectURL(file) : blankImage}
                                    onClick={() => fileEl.current.click()}
                                    size={10}
                                    className={"w-full h-full object-contain "}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="text-center">
                <Button onClick={handleClickCreateProduct}>Create Product</Button>
            </div>
        </div>
    </div>

    )


}