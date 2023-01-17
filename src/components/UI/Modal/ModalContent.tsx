import { useContext } from 'react';
import { TechsIcons } from '../../../GlobalStyles';
import { ModalProjectContext } from '../../../store/ModalContext';
import {
  Links,
  ModalContentContainer,
  ModalContentStyled,
  ModalImagePreview,
  ModalInfo,
  ModalProjectTitle,
} from './ModalContent.styled';

const ModalContent = () => {
  const { isModalOpen } = useContext(ModalProjectContext);

  return (
    <ModalContentStyled>
      <ModalProjectTitle>{isModalOpen.project?.title}</ModalProjectTitle>

      <ModalContentContainer>
        <ModalInfo>
          <p>{isModalOpen.project?.description}</p>

          <TechsIcons>
            {isModalOpen.project?.techs.map((tech) => {
              return (
                <li key={tech.label}>
                  <img src={tech.icon} alt={tech.label} />
                  <span>{tech.label}</span>
                </li>
              );
            })}
          </TechsIcons>

          <Links>
            <li>
              <a href={isModalOpen.project?.links.live} target="_blank">
                Live
              </a>
            </li>
            <li>
              <a href={isModalOpen.project?.links.code} target="_blank">
                Code
              </a>
            </li>
          </Links>
        </ModalInfo>

        <ModalImagePreview
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <a href={isModalOpen.project?.links.live} target="_blank">
            <img
              src={isModalOpen.project?.imagem}
              alt={isModalOpen.project?.title}
            />
          </a>
        </ModalImagePreview>
      </ModalContentContainer>
    </ModalContentStyled>
  );
};
export default ModalContent;
