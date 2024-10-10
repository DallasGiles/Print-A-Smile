import React from 'react';

const Home = () => (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center py-16 px-8">
        <section className="max-w-3xl text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Welcome to Print-A-Smile Foundation</h1>
          <p className="text-xl text-gray-800 mb-4">
          Our Story and Goals
          </p>
          <p className="text-lg text-gray-800">
          Print a Smile was founded by three passionate 19-year-olds who sought to make a difference. When Isaac received a 3D printer as a gift, he began crafting toys for friends and family. This sparked the idea of creating a more efficient way to provide gifts to children in need. By harnessing both existing 3D printer resources and acquiring new printers for our cause, we aim to produce a variety of toys that will bring joy to children this Christmas. We invite everyone to join us in our mission to spread smiles and make a lasting impact in our community.
          </p>
        </section>
        <section className="max-w-3xl text-center">
          <p className="text-xl text-gray-800 mb-4">
          Why 3D printing?
          </p>
          <p className="text-lg text-gray-800">
          3D printing offers a unique advantage in producing toys that are both adaptable and customizable. If a particular type of toy experiences higher demand, our printers can quickly pivot to create it. This flexibility allows us to generate a wide variety of toys while minimizing the number of machines needed, ensuring each product can be tailored to meet the specific wishes of the children we serve.
          </p>
        </section>
      </main>
    </div>
  );
  
  export default Home;