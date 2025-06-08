"use client"

import { useState, useEffect } from "react"
import { Navbar, WhereTo, ToVisit, ToEat, ToStay, Footer } from "../components"
import travelerChoiceBg from "../img/tc_cards_desktop.jpeg"
import travelerChoiceBgSM from "../img/tc_cards_tablet.jpeg"
import botb from "../img/botb_mark.svg"

const Home = () => {
  // Home Page Trending in Travel toggle state
  const [toggle, setToggle] = useState({
    toGo: true, // Place to Go state, active by default
    toDo: false, //Things to Do state
    toStay: false, //Places to stay
  })

  // Dynamic travelers' choice data
  const [travelersChoice, setTravelersChoice] = useState({
    title: "Urban Explorer's Choice",
    subtitle: "Best Urban Destinations 2024",
    description: "Discover the most vibrant cities and urban experiences as chosen by fellow urban explorers",
  })

  // Update travelers' choice content dynamically
  useEffect(() => {
    const choices = [
      {
        title: "Urban Explorer's Choice",
        subtitle: "Best Urban Destinations 2024",
        description: "Discover the most vibrant cities and urban experiences as chosen by fellow urban explorers",
      },
      {
        title: "City Wanderer's Pick",
        subtitle: "Top Metropolitan Adventures",
        description: "Explore the finest urban landscapes and cultural hotspots recommended by city enthusiasts",
      },
      {
        title: "Metro Explorer's Award",
        subtitle: "Premier Urban Experiences",
        description: "Uncover the best urban attractions and hidden gems in India's bustling cities",
      },
    ]

    const interval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setTravelersChoice(randomChoice)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Navbar with Sticky poperty */}
      <Navbar sticky />
      {/* --- */}

      {/* Search Form - Where to */}
      <WhereTo />
      {/* --- */}

      {/* Places to Visit Carousel */}
      <ToVisit />
      {/* --- */}

      {/* Places to Eat Carousel */}
      <ToEat />
      {/* --- */}

      {/* Places to Stay Carousel */}
      <ToStay />
      {/* --- */}

      {/* Traveler Choice Section - Now Dynamic */}
      <div className="bg-gradient-to-r from-[#004f32] to-[#006b44]">
        <div className="container mx-auto mmd:grid mmd:grid-cols-12 h-[400px] sm:h-[500px] mmd:h-[600px] overflow-hidden">
          <div className="col-span-3 text-center py-6 flex flex-col items-center justify-center p-4 md:p-2">
            <img src={botb || "/placeholder.svg"} alt="" className="h-16 lg:h-20 mb-5 lg:mb-10" />
            <h2 className="text-white font-bold text-2xl md:text-[2.15em] transition-all duration-500">
              {travelersChoice.title}
            </h2>
            <h3 className="text-yellow-300 font-semibold text-lg md:text-xl mt-2 transition-all duration-500">
              {travelersChoice.subtitle}
            </h3>
            <p className="text-gray-200 text-sm mt-3 transition-all duration-500">{travelersChoice.description}</p>
            <button className="rounded-full bg-yellow-500 hover:bg-yellow-400 transition ease-out duration-200 text-black w-fit py-2 sm:py-3 px-3 sm:px-4 mt-5 lg:mt-14">
              <p className="font-semibold text-sm">Explore Winners</p>
            </button>
          </div>
          {/* Section Background Image - Displays only on Large devices, Like Desktop */}
          <div
            className="hidden mmd:block h-full col-span-9 bg-cover"
            style={{ backgroundImage: `url(${travelerChoiceBg})` }}
          />
          {/* --- */}

          {/* Section Background Image - Displays only on Small Devices, Mobile */}
          <div
            className="block mmd:hidden h-full bg-contain bg-top"
            style={{ backgroundImage: `url(${travelerChoiceBgSM})`, backgroundRepeat: "no-repeat" }}
          />
          {/* --- */}
        </div>
      </div>
      {/* --- */}

      {/* Trending in Travel Section - Updated with Indian Locations */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="font-bold text-lg md:text-2xl my-5">Trending in India</h2>
        <div>
          {/* Trending in Travel Toggles */}
          <div className="flex text-sm md:text-base space-x-4 md:space-x-8 whitespace-nowrap overflow-x-auto travel_toggle">
            {/* Places to go toggle */}
            <h3
              className={`${toggle.toGo ? "border-black" : "border-transparent"} font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer`}
              // onClick toggle, all items in the 'toggle' state object is set to false while 'toGo' is true
              onClick={() => setToggle({ toGo: true, toDo: false, toStay: false })}
            >
              Places to Go
            </h3>
            {/* --- */}

            {/* Things to Do toggle */}
            <h3
              className={`${toggle.toDo ? "border-black" : "border-transparent"} font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer`}
              // onClick toggle, all items in the 'toggle' state object is set to false while 'toDo' is true
              onClick={() => setToggle({ toGo: false, toDo: true, toStay: false })}
            >
              Things to Do
            </h3>
            {/* --- */}

            {/* Places to Stay toggle */}
            <h3
              className={`${toggle.toStay ? "border-black" : "border-transparent"} font-medium mb-3 border-b-2 pb-1 hover:border-black w-fit cursor-pointer`}
              // onClick toggle, all items in the 'toggle' state object is set to false while 'toStay' is true
              onClick={() => setToggle({ toGo: false, toDo: false, toStay: true })}
            >
              Places to Stay
            </h3>
            {/* --- */}
          </div>
          {/* --- */}
          <div>
            {/* List of Places to Go - Display only if 'toGo' is true - Updated with Indian Cities */}
            {toggle.toGo && (
              <div className="grid grid-cols-12">
                {/* Mapping through list of items to render */}
                {[
                  "Mumbai Hotels",
                  "Delhi Hotels",
                  "Bangalore Hotels",
                  "Goa Hotels",
                  "Jaipur Hotels",
                  "Chennai Hotels",
                  "Kolkata Hotels",
                  "Hyderabad Hotels",
                  "Pune Hotels",
                  "Agra Hotels",
                  "Udaipur Hotels",
                  "Rishikesh Hotels",
                  "Manali Hotels",
                  "Shimla Hotels",
                  "Darjeeling Hotels",
                  "Kochi Hotels",
                  "Mysore Hotels",
                  "Varanasi Hotels",
                  "Amritsar Hotels",
                  "Jodhpur Hotels",
                ].map((item, i) => (
                  <a
                    key={i}
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
                    href="#"
                  >
                    {item}
                  </a>
                ))}
                {/* --- */}
              </div>
            )}
            {/* --- */}

            {/* List of Things to Do - Displays only if 'toDo' is true - Updated with Indian Attractions */}
            {toggle.toDo && (
              <div className="grid grid-cols-12">
                {/* Mapping through List of Items to render */}
                {[
                  "Things to Do in Mumbai",
                  "Things to Do in Delhi",
                  "Things to Do in Bangalore",
                  "Things to Do in Goa",
                  "Things to Do in Jaipur",
                  "Things to Do in Chennai",
                  "Things to Do in Kolkata",
                  "Things to Do in Hyderabad",
                  "Things to Do in Pune",
                  "Things to Do in Agra",
                  "Things to Do in Udaipur",
                  "Things to Do in Kerala",
                  "Things to Do in Rajasthan",
                  "Things to Do in Kashmir",
                  "Things to Do in Himachal Pradesh",
                  "Things to Do in Karnataka",
                  "Things to Do in Tamil Nadu",
                  "Things to Do in Gujarat",
                  "Things to Do in Maharashtra",
                  "Things to Do in West Bengal",
                ].map((item, i) => (
                  <a
                    key={i}
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
                    href="#"
                  >
                    {item}
                  </a>
                ))}
                {/* --- */}
              </div>
            )}
            {/* --- */}

            {/* List of Places to Stay - Displays only if 'toStay' is true - Updated with Indian Hotels */}
            {toggle.toStay && (
              <div className="grid grid-cols-12">
                {/* Mapping through list of Items to render */}
                {[
                  "The Taj Mahal Palace Mumbai",
                  "The Imperial New Delhi",
                  "ITC Grand Chola Chennai",
                  "The Leela Goa",
                  "Rambagh Palace Jaipur",
                  "The Oberoi Mumbai",
                  "ITC Maurya New Delhi",
                  "The Park Bangalore",
                  "Taj Lake Palace Udaipur",
                  "The Oberoi Amarvilas Agra",
                  "ITC Grand Bharat Gurgaon",
                  "The Leela Palace Bangalore",
                  "Taj Falaknuma Palace Hyderabad",
                  "The Oberoi Rajvilas Jaipur",
                  "ITC Sonar Kolkata",
                  "The Leela Palace Chennai",
                  "Taj West End Bangalore",
                  "The Oberoi Grand Kolkata",
                  "ITC Windsor Bangalore",
                  "Taj Coromandel Chennai",
                  "The Leela Mumbai",
                  "ITC Maratha Mumbai",
                  "Taj Palace New Delhi",
                  "The Oberoi New Delhi",
                  "Hyatt Regency Delhi",
                  "JW Marriott Mumbai",
                  "The Westin Gurgaon",
                  "Shangri-La Bangalore",
                  "Conrad Bangalore",
                  "St. Regis Mumbai",
                  "Four Seasons Mumbai",
                  "The Ritz-Carlton Bangalore",
                  "W Goa",
                  "Alila Diwa Goa",
                  "Grand Hyatt Goa",
                  "Park Hyatt Chennai",
                  "Vivanta Chennai",
                  "The Zuri Kumarakom",
                  "Kumarakom Lake Resort",
                  "Marari Beach Resort",
                ].map((item, i) => (
                  <a
                    key={i}
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-xs md:text-sm font-medium cursor-pointer hover:underline mb-1"
                    href="#"
                  >
                    {item}
                  </a>
                ))}
                {/* --- */}
              </div>
            )}
            {/* --- */}
          </div>
        </div>
      </div>
      {/* --- */}

      {/* Footer */}
      <Footer />
      {/* --- */}
    </>
  )
}

export default Home
