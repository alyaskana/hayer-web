import styled from "styled-components";
import { PostCard } from "components/Post/PostCard";
import { space } from "styled-system";

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${space}
`;

export const StyledPostCard = styled(PostCard)`
  margin-bottom: 8px;
`;
