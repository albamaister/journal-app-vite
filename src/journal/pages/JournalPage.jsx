import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { Noteview } from "../view/noteview";
import { NothingSelectedView } from "../view/NothingSelectedView";

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal )


  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
      { !!active ?
        <Noteview/> :
        <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  );
};
