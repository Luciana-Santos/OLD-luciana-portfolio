import { ProjectProps } from '../../../store/ModalContext';

const ModalContent = ({ data }: { data: ProjectProps }) => {
  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
};
export default ModalContent;
