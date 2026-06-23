import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { styles } from '../styles/Confirm';

class PasteConflictDialog extends PureComponent {
  render() {
    const { classes: styles, open, onResolve, onClose } = this.props;

    return (
      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
        aria-labelledby="paste-conflict-dialog"
        disableEscapeKeyDown={false}
        onEscapeKeyDown={onClose}
      >
        <DialogTitle id="paste-conflict-dialog">
          File Conflicts Detected
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Some files already exist in the destination. How would you like to
            handle this conflict?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '16px',
          }}
        >
          <div style={{ display: 'flex', width: '100%', gap: '8px' }}>
            <Button
              onClick={() => onResolve('overwrite')}
              color="primary"
              variant="contained"
              style={{ flex: 1 }}
              className={classNames(styles.btnPositive)}
            >
              Overwrite All
            </Button>
            <Button
              onClick={() => onResolve('skip')}
              color="secondary"
              variant="outlined"
              style={{ flex: 1 }}
            >
              Skip Existing
            </Button>
          </div>
          <div style={{ display: 'flex', width: '100%', gap: '8px' }}>
            <Button
              onClick={() => onResolve('different')}
              color="default"
              variant="outlined"
              style={{ flex: 1 }}
            >
              Overwrite if Different
            </Button>
            <Button
              onClick={() => onResolve('resume')}
              color="default"
              variant="outlined"
              style={{ flex: 1 }}
            >
              Skip if Same Size
            </Button>
          </div>
          <Button
            onClick={onClose}
            color="default"
            variant="text"
            style={{ width: '100%' }}
            className={classNames(styles.btnNegative)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(PasteConflictDialog);
