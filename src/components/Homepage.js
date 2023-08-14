import React from 'react';

const Homepage = () => {
  return (
    <div className='' id="courses">
      <p className='text-center text-2xl mb-12'>Our courses</p>
      <div className="p-24">
        <div className='grid gap-8 justify-items-center grid-cols-2 bg-gray-700 p-12 rounded-lg mb-12'>
          <img src={require('../pictures/HSC-23-engg.png')} alt="HSC-23 Engineering Private Batch" className="" />
          <div>
            <p className='font-bold text-base'>HSC-23 Engineering Private Batch</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam temporibus ratione vel, neque harum reprehenderit, animi a est sunt modi incidunt. Unde tenetur aliquam consectetur, eveniet voluptatibus, quia modi architecto aut voluptates ad necessitatibus voluptas explicabo obcaecati omnis possimus nobis. Debitis corrupti nam fugit dolorem alias veniam cum ullam.
            </p>
            <br />
            <button className="rounded-lg bg-white px-4 py-2 text-black">Buy now</button>
          </div>
        </div>
        <div className='grid gap-8 justify-items-center grid-cols-2 bg-gray-700 p-12 rounded-lg mb-12'>
          <img src={require('../pictures/HSC-23-varsity.jpg')} alt="HSC-23 Varsity Private Batch" className="" />
          <div>
            <p className='font-bold text-base'>HSC-23 Varsity Private Batch</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam temporibus ratione vel, neque harum reprehenderit, animi a est sunt modi incidunt. Unde tenetur aliquam consectetur, eveniet voluptatibus, quia modi architecto aut voluptates ad necessitatibus voluptas explicabo obcaecati omnis possimus nobis. Debitis corrupti nam fugit dolorem alias veniam cum ullam.
            </p>
            <br />
            <button className="rounded-lg bg-white px-4 py-2 text-black">Buy now</button>
          </div>
        </div>
        <div className='grid gap-8 justify-items-center grid-cols-2 bg-gray-700 p-12 rounded-lg mb-12'>
          <img src={require('../pictures/medical-23.png')} alt="HSC-23 Medical Private Batch" className="" />
          <div>
            <p className='font-bold text-base'>HSC-23 Medical Private Batch</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam temporibus ratione vel, neque harum reprehenderit, animi a est sunt modi incidunt. Unde tenetur aliquam consectetur, eveniet voluptatibus, quia modi architecto aut voluptates ad necessitatibus voluptas explicabo obcaecati omnis possimus nobis. Debitis corrupti nam fugit dolorem alias veniam cum ullam.
            </p>
            <br />
            <button className="rounded-lg bg-white px-4 py-2 text-black">Buy now</button>
          </div>
        </div>
        <div className='grid gap-8 justify-items-center grid-cols-2 bg-gray-700 p-12 rounded-lg mb-12'>
          <img src={require('../pictures/HSC-24.png')} alt="HSC-24 Academic Private Batch" className="" />
          <div>
            <p className='font-bold text-base'>HSC-24 Academic Private Batch</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam temporibus ratione vel, neque harum reprehenderit, animi a est sunt modi incidunt. Unde tenetur aliquam consectetur, eveniet voluptatibus, quia modi architecto aut voluptates ad necessitatibus voluptas explicabo obcaecati omnis possimus nobis. Debitis corrupti nam fugit dolorem alias veniam cum ullam.
            </p>
            <br />
            <button className="rounded-lg bg-white px-4 py-2 text-black">Buy now</button>
          </div>
        </div>
      </div>

      <p className='text-center text-2xl mb-12'>Our Accomplishments</p>
      <div className='p-24'>
        <p>
          From 2022 Engineering Private batch, 8 out of 10 students were from ACS. In the first 1500 merit list of BUET, 738 students from our Engineering private batch secured their spots.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint, nulla quam perferendis suscipit ratione quae eius obcaecati velit laborum iste ullam officia voluptate ex architecto quo repellat autem ea!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia. Vitae molestias cumque voluptatum id laudantium ipsam voluptatem fugiat et libero dolorum possimus pariatur odio, esse doloribus magni natus praesentium quod suscipit enim eaque!
        </p>
      </div>
      <p className='text-center text-2xl mb-12'>Our Teachers</p>
      <div className='grid grid-cols-3 gap-8 px-24'>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/Numeri-Sattar-Apar.jpg')} alt="Apar (CEO)" className='h-60 p-10' />
            <p className='text-center'>Numeri Sattar Apar</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Civil Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/Avi-dada.jpg')} alt="Avi dada" className='h-60 p-10' />
            <p className='text-center'>Abhi Datta Tushar</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Mechanical Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/Sanjay-dada.png')} alt="Sanjay dada" className='h-60 p-10' />
            <p className='text-center'>Sanjoy Chakraborty</p>
            <p className='text-center'>CEO, ACS group</p>
            <p className='text-center'>Mechanical Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/Kazi-Rakibul-Hasan.png')} alt="Rakibul vaiya" className='h-60 p-10' />
            <p className='text-center'>Kazi Rakibul Hasan</p>
            <p className='text-center'>Math instructor</p>
            <p className='text-center'>Computer Science and Engineering , BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/nazmus-sakib.jpg')} alt="Sakib vaiya" className='h-60 p-10' />
            <p className='text-center'>Md Nazmus Sakib</p>
            <p className='text-center'>CEO, ACS Group</p>
            <p className='text-center'>Chemistry Dept. Dhaka University</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/apurbo.jpg')} alt="Apurbo dada" className='h-60 p-10' />
            <p className='text-center'>Apurbo Opu </p>
            <p className='text-center'>Physics instructor</p>
            <p className='text-center'>BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/shajeeb.png')} alt="Dr. Tofael Ahmed Shajeeb" className='h-60 p-10' />
            <p className='text-center'>Dr. Tofael Ahmed Shajeeb</p>
            <p className='text-center'>Biology instructor</p>
            <p className='text-center'>Dhaka Medical College</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/hossain-emon.jpg')} alt="Emon vaiya" className='h-60 p-10' />
            <p className='text-center'>Sharoare Hossain Emon</p>
            <p className='text-center'>Physics instructor</p>
            <p className='text-center'>Biomedical Engineering, BUET</p>
            <br />
          </div>
        </div>
        <div className='bg-gray-700 rounded-lg flex justify-center'>
          <div>
            <img src={require('../pictures/shuvro.png')} alt="Hasnat Shuvro" className='h-60 p-10' />
            <p className='text-center'>Hasnat Shuvro</p>
            <p className='text-center'>Biology instructor</p>
            <p className='text-center'>Shaheed Suhrawardy Medical College</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;