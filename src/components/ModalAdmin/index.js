import React from 'react'
import { PASSWORD } from '../../utils/environment'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalAdmin, activeAdminMode } from '../../store/actions/app'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function FormDialog() {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.app.modalAdmin)
  const [value, setValue] = React.useState('')

  const handleClose = () => {
    dispatch(toggleModalAdmin())
  }

  const checkPassword = (password) => {
    const correctPassword = PASSWORD
    if (password === correctPassword) {
      dispatch(activeAdminMode())
      dispatch(toggleModalAdmin())
    }
  }

  console.log(value)

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Admin Mode</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To active the admin mode please enter the password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(event) => setValue(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => checkPassword(value)} color="secondary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
