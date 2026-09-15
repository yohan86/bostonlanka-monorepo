import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface CategoryFooterLinkProps {
  categoryName: string;
  categorySlug: string;
}

export const CategoryFooterLink = ({
  categoryName,
  categorySlug,
}: CategoryFooterLinkProps) => {
  return (
    <div className="w-full pt-4 mt-4 border-t border-gray-100 flex justify-end">
      <Link
        href={`/category/${categorySlug}`}
        className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-site-red hover:text-black transition-colors duration-200"
      >
        <span>More {categoryName} Articles</span>
        <MdKeyboardDoubleArrowRight 
          size={18} 
          className="transition-transform duration-300 group-hover:translate-x-1.5" 
        />
      </Link>
    </div>
  );
};

export default CategoryFooterLink;