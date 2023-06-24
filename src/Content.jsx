import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
// colors: #595959 #FFC857
var amount = 0
const product = {
  name: 'Pay using UPI',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      alt: 'Noodles',
    }
  ],

  sizes: [
    { name: 'Plain Maggi', inStock: true , price: 30 },
    { name: 'FQ Special', inStock: true , price: 35 },
    { name: 'Egg Maggi', inStock: true , price: 48},
    { name: 'Double Egg', inStock: true , price: 55},
  ],
  description:
    "Welcome to Food Queen, your premium destination for affordable and delicious Maggi. Explore our extensive range of four enticing varieties, guaranteed to leave you craving for more. Prepare to be impressed, as we are confident that your first visit won't be your last.",
  contact: [
    '+ 91 73XXXXXXXX',
  ],
  details:
    'Vegeterian and Non-vegeterian dishes are prepared in separate vessels on separate tables on separate induction cookers',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//Add your UPI in the following format: 999999999@paytm => userName: 999999999 provider: paytm

export default function Content(prop) {
  const userName = ''
  const provider = ''
  const upiID =`${userName}@${provider}`
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [amount, setAmount] = useState(prop.price);
  const [quantity, setQuantity] = useState(1);
  const [selectedSizePrice, setSelectedSizePrice] = useState(product.sizes[0].price);
  const upiLink = `upi://pay?pa=${upiID}&pn=%20&tr=%20&am=${selectedSizePrice*quantity}&cu=INR`;
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedSizePrice(size.price);
  };
  const decrement = (e) => {
    e.preventDefault();
    if (quantity!=0){
      setQuantity(quantity => quantity - 1);
      setAmount(amount => amount*quantity);
    }
    
  };

  const increment = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <div className="bg-white">
      {/* Image and logo */}
      {/* <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-none lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 rounded-lg">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img src='https://i.imgur.com/nQeUH5t.png' className="mx-[63px] h-[250px] w-[250px] object-contain my-auto"></img>
        </div>
      </div> */}




      <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-none lg:gap-x-8 lg:px-8 lg:max-h-full">
        <div className="aspect-h-4 lg:aspect-h-1 aspect-w-3 rounded-lg">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img src='https://i.imgur.com/nQeUH5t.png' className="lg:mx-auto mx-auto h-[250px] w-[250px] object-contain my-auto"></img>
        </div>
      </div>



      {/* Pay using UPI */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-light tracking-medium text-gray-900 sm:text-3xl">{product.name}</h1>
        </div>

        <div className="mt-3 lg:row-span-3 lg:mt-0">
          <p className="text-4xl tracking-medium text-gray-800">{selectedSizePrice*quantity}</p>

          <form className="mt-8">
            <div>
              <h3 className="text-md font-medium uppercase text-gray-900">Quantity</h3>

            </div>
            <div className="custom-number-input h-10 w-32 py-4">
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={decrement} className=" bg-[#F9F9F9] text-[#FFC857] hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                  <span className="m-auto text-2xl font-thin">-</span>
                </button>
                <input type="number" className="focus:outline text-center w-10 bg-[#F9F9F9] font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                <button onClick={increment} className="bg-[#F9F9F9] text-[#FFC857] hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>  
              {/* Menu */}
              <div className="mt-[55px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium uppercase text-gray-900">Menu</h3>
                </div>

                <RadioGroup value={selectedSize} onChange={handleSizeChange} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-[#FFC857]' : '',
                            'text-center font-sans group relative flex rounded-md border py-2 px-2 text-md font-light hover:bg-gray-50 focus:outline-none sm:py-5'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-[#FFC857]' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <a href={upiLink}>                  
                <button
                  type="button"
                  className="mt-10 flex w-full items-center justify-center rounded-xl border border-transparent bg-[#FFC857] px-8 py-2 text-xl font-medium text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Pay
                </button>
              </a>  
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-7">
            <h3 className="text-sm font-medium text-gray-900">Contact Info</h3>

            <div className="mt-4">
              {product.contact.map((contact) => (
                <span className="text-gray-600 font-light tracking-wider">{contact}</span>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-medium text-gray-900">For Vegeterians</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm font-light text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
        <footer className='font-light text-xs'>Copyright © 2023 @rraj-offical5 All rights reserved</footer>
      </div>
    </div>
  )
}
