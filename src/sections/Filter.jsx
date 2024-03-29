import Button from '../components/Button';
import { searchIcon, clear } from '../assets/icons';

const Filter = ({
  searchInput,
  setSearchInput,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <section id='search' className='flex justify-center max-container '>
      <div className=' flex justify-center items-center flex-wrap w-full gap-2 pt-28 '>
        <div className='flex-2 flex items-center gap-4 py-1.5 px-4 border-2 border-slate-gray rounded-full focus-within:border-emerald-600 transition-border-color duration-200'>
          <input
            type='text'
            placeholder='Search'
            className='appearance-none focus:outline-none  :'
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <img
            src={searchIcon}
            alt='search'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </div>
        <div
          onClick={() => {
            setSearchInput('');
            setCategory('all');
            setSort('a-z');
          }}
        >
          <img
            src={clear}
            alt=''
            width={40}
            height={32}
            className='border-2 rounded-[16px] p-1 border-slate-gray cursor-pointer active:border-emerald-600 transition-color'
          />
        </div>
        <div className='flex gap-2'>
          <div className='flex-1 py-1.5 px-4 border-2 border-slate-gray rounded-full focus-within:border-emerald-600 cursor-pointer'>
            <select
              name='categorySort'
              id='categorySort'
              className='focus:outline-none cursor-pointer'
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value='all'>All</option>
              <option value="men's clothing">Men&apos;s clothing</option>
              <option value="women's clothing">Women&apos;s clothing</option>
              <option value='shoes'>Shoes</option>
              <option value='jewelery'>Jewelery</option>
              <option value='electronics'>Electronics</option>
            </select>
          </div>
          <div className='py-1.5 px-4 border-2 border-slate-gray rounded-full focus-within:border-emerald-600 cursor-pointer'>
            <select
              name='sort'
              id='sort'
              className='focus:outline-none cursor-pointer'
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value='a-z'>A-Z</option>
              <option value='z-a'>Z-A</option>
              <option value='low-high'>Lowest (Price)</option>
              <option value='high-low'>Highest (Price)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
