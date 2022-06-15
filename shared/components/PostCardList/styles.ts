import styled from "styled-components";
import { PostCard } from "@shared/components/Post/PostCard";

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledPostCard = styled(PostCard)`
  margin-bottom: 8px;
`;
